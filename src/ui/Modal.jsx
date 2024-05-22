import React, { forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef( ({children,...props}, ref)=> {

  return createPortal (
    <dialog className="modal" ref={ref} {...props}>
      {children}
    </dialog>,
    document.getElementById('modal-root')
  )
}
)
export default Modal



