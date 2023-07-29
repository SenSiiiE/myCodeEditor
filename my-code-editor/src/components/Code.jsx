import Editor from "./Editor"





const Code = () => {

    return (
        <>
            <Editor 
                heading = "HTML"
                icon = "/"
                color = "#FF3C41"
            />
            <Editor 
                heading = "CSS"
                icon = "*"
                color = "#0EBEFF"
            />
            <Editor 
                heading = "JavaScript"
                icon = "<>"
                color = "#FCD000"
            />
        </>
    )
}

export default Code;