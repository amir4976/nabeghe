import React from 'react'
import PanelLayout from '@/components/layout/PanelLayout'
function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
    <PanelLayout>
        {children}
    </PanelLayout>
    </div>
  )
}

export default layout
