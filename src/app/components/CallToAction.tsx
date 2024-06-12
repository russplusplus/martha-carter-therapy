export function CallToAction(
    { className } 
    : 
    { className?: string }
) {
    const allClassNames = "flex-h-center margin-t-l margin-b-l cream " + className
    return (
        <div className={allClassNames}>
          <h2 className='book-btn'>
            Book a free consultation
          </h2>
        </div>
    )
}