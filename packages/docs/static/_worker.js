export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)

    if (response.status !== 404 || !isDemoPageRequest(request)) {
      return response
    }

    const fallbackUrl = new URL('/demos/index.html', request.url)
    return env.ASSETS.fetch(new Request(fallbackUrl, request))
  },
}

function isDemoPageRequest(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return false
  }

  const { pathname } = new URL(request.url)
  if (!pathname.startsWith('/demos/')) {
    return false
  }

  const finalSegment = pathname.split('/').pop() || ''
  if (finalSegment.includes('.')) {
    return false
  }

  const accept = request.headers.get('accept') || ''
  return accept.includes('text/html') || accept.includes('*/*')
}
