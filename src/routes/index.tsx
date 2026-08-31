import { createBrowserRouter } from 'react-router'

import { RootLayout } from '@/routes/layouts/root-layout'
import { ViewPage } from '@/routes/view/view-page'
import { PrintPage } from '@/routes/print/print-page'
import { NotFoundPage } from '@/routes/not-found/not-found-page'

function RouterHydrateFallback() {
  return null
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    HydrateFallback: RouterHydrateFallback,
    children: [
      {
        index: true,
        lazy: loadEditorRoute,
      },
      {
        path: 'editor',
        lazy: loadEditorRoute,
      },
      { path: 'view', element: <ViewPage /> },
      { path: 'print', element: <PrintPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

async function loadEditorRoute() {
  const { EditorPage } = await import('@/routes/editor/editor-page')
  return { Component: EditorPage }
}
