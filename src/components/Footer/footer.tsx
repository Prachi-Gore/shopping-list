const Footer=()=>{
    const keyPoints=['ContextApi','Bootstrap5','React','typescript','useReducer',
    'notification','react-toast','useForm','html','animation']
    return(
        <footer className="fixed-bottom text-white moving-text d-flex gap-4 px-2 py-1.5">
            {
                keyPoints.map((item,id)=> <p key={id} className="px-3 py-2 d-flex align-items-center justify-content-center rounded-2 text-nowrap">{item}</p>)
            }
        </footer>
    )
}

export default Footer;