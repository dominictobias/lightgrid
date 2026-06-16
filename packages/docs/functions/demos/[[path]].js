export async function onRequest(context) {
  const response = await context.next()

  if (response.status !== 404 || !isDemoPageRequest(context.request)) {
    return response
  }

  return context.next('/demos/index.html')
}

function isDemoPageRequest(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return false
  }

  const { pathname } = new URL(request.url)
  const finalSegment = pathname.split('/').pop() || ''
  if (finalSegment.includes('.')) {
    return false
  }

  const accept = request.headers.get('accept') || ''
  return accept.includes('text/html') || accept.includes('*/*')
}
