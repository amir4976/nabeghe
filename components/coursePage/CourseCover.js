// MDXContent.jsx
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents = {
  img: async ({ src, alt = "", ...restProps }) => {
      const img = await import(`../../public${src}`)
      return (
        <figure>
          <Image
            src={img}
            alt={alt}
            width={100}
            height={100}
            sizes="(min-width: 1024px) 80vw, 100vw"
            {...restProps}
          />
          {alt && <figcaption>{alt}</figcaption>}
        </figure>
      );
    };
};

const MDXContent = ({ code }) => {
  const Content = useMDXComponent(code); // let's assume we pass the above mdx's raw code here
  return <Content components={mdxComponents} />;
};
