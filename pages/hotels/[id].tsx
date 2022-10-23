import { GetStaticPropsContext, InferGetStaticPropsType } from "next"


export default function Hotel({post}:InferGetStaticPropsType<typeof getStaticProps>){
    console.log(post.data)
}

export async function getStaticPaths(){
    return {
        paths: [{params: {id:'1'}},{params:{id:'2'}}]
    }
}

type InferGetStaticPathsType<T>=T extends ()=>Promise<{paths: Array<{params: infer Params}>}> ? Params : never;

export async function getStaticProps(ctx:GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>){
    return {
        props: {
            post: {
                data: "hey"
            }
        }
    }
}