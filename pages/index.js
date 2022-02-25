import Head from "next/head";
import React from 'react';
import EditorSection from "../components/EditorComponents/EditorSection";

const index = () => {
  return (
    <div>
      <Head>
        <title>Simple Coding Editor</title>
        <meta name="Code Editor" content="Simple Code Editor with Codemirror and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EditorSection />
    </div>
  );
};

export default index;