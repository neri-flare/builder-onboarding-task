import React from "react";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import MarbleHeader from "@/components/MarbleHeader";
import "../components/Button";

interface Params extends ParsedUrlQuery {
  page?: string[];
}

interface Context extends GetStaticPropsContext {
  params?: Params;
}

interface Props {
  page?: { [key: string]: any };
}

// Replace with your Public API Key
const apiKey = process.env.NEXT_PUBLIC_YOUR_API_KEY || "";
builder.init(apiKey);

export const getStaticProps: GetStaticProps = async ({ params }: Context) => {
  // Fetch the builder content
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 2,
  };
};

export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });
  console.log("page", pages);

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

const Page: React.FC<Props> = ({ page }) => {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      <MarbleHeader />
      <BuilderComponent model="page" content={page} />
    </>
  );
};

export default Page;
