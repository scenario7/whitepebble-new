import NavBar from '@/components/NavBar';
import CustomFooter from '@/components/CustomFooter';
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google';
import client from '@/app/client';
import BlockContent from '@sanity/block-content-to-react';
import ContactFooter from '@/components/ContactFooter';

const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
});
const dm_sans = DM_Sans({
    weight: '400',
    subsets: ['latin'],
});
const inter = Inter_Tight({
    weight: '400',
    subsets: ['latin'],
});

async function getData(slug) {
    const data = await client.fetch(
        `*[_type == "post" && slug.current == $slug]{
            _id,
            title,
            author->{
                name,
                image {
                    asset -> {
                        _id,
                        url
                    }
                }
            },
            body,
            mainImage {
                asset -> {
                  _id,
                  url
                },
                alt
              },
        }`,
        { slug }
    );

    if (data) {
        return data[0]; // Return the first item from the array
    } else {
        console.error('No data found');
        return null;
    }
}

const serializers = {
    types: {
        block: (props) => {
            switch (props.node.style) {
                case 'h1':
                    return <h1 className='text-5xl pb-5'>{props.children}</h1>;
                case 'h2':
                    return <h2 className='text-4xl pb-5'>{props.children}</h2>;
                case 'h3':
                    return <h3 className='text-3xl pb-5'>{props.children}</h3>;
                case 'h4':
                    return <h4 className='text-2xl pb-5'>{props.children}</h4>;
                case 'blockquote':
                    return <blockquote>{props.children}</blockquote>;
                default:
                    return <p className='text-xl'>{props.children}</p>;
            }
        },
        image: ({ node }) => (
            <img
                src={node.asset.url}
                alt={node.alt || 'Image'}
                style={{ maxWidth: '100%' }}
            />
        ),
    },
    marks: {
        strong: ({ children }) => <strong>{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        link: ({ children, mark }) => (
            <a
                href={mark.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline"
            >
                {children}
            </a>
        ),
    },
};

const Page = async ({ params }) => {
    const post = await getData(params.blogID);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='min-h-screen'>
            <NavBar />
            <div className='flex flex-col justify-start items-center py-10 bg-gradient-to-b from-white to-[#FEEFe8]'>
                <div className='relative w-full h-96'>
                    <img
                        className='w-full h-full object-cover absolute'
                        src={post.mainImage.asset.url}
                        alt='Background Image'
                    />
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className={`${marcellus.className} flex flex-col absolute gap-10 inset-0 items-center justify-center text-white text-3xl md:text-6xl lg:text-6xl`}>
                        <h1>{post.title}</h1>
                        <div className='flex gap-5 items-center'>
                            <img
                                src={post.author.image.asset.url}
                                className='h-14 w-14 rounded-full object-cover'
                                alt={post.author.name}
                            />
                            <div className='flex flex-col items-start text-left'>
                                <p className={`${dm_sans.className} text-sm text-gray-300`}>Written by</p>
                                <h1 className={`${dm_sans.className} text-xl text-white`}>{post.author.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`px-20 py-20 ${dm_sans.className} text-[#171717]`}>
                    <BlockContent blocks={post.body} serializers={serializers} />
                </div>
            </div>
            <ContactFooter/>
            <CustomFooter />
        </div>
    );
}

export default Page;
