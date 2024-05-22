export default function Input({id, children, className, ...otherProps}) {
    return (
      <div className={className}>
          <label htmlFor={id}>{children}</label>
          <input id={id} name={id} {...otherProps}/>
      </div>
    )
  }