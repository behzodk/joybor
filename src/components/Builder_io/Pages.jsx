import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from "react";

// Put your builder API key here
builder.init('f2f221044c6540cb91f4737222c30566')

function App() {
      const isPreviewingInBuilder = useIsPreviewing();
      const [notFound, setNotFound] = useState(false);
      const [content, setContent] = useState(null);

      useEffect( () => {
        async function fetchContent() {
          const content = await builder.get('page', {
            url: window.location.pathname
          }).promise();
          
          document.title = content.data.title;

          setContent(content);
          setNotFound(!content);
        }
        fetchContent();
      }, []);

      if (notFound && !isPreviewingInBuilder) {
        return <div>Not Found 404 Error</div>
      }

  return (
    <>
      <BuilderComponent model="page" content={content} />
    </>
  );
}

export default App;