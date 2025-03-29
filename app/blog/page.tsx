import './app.css'
import React from 'react';
import CaseStudyCard from '@/components/animata/card/case-study-card';
const Blog = () => {
    return (
        <>
        <div className="new_book flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl text-black font-bold">Blog</h1>
            <p className="mt-4 text-black text-lg">Coming Soon...</p>
       
        <CaseStudyCard type='content' title='Unveiling the Unknown ✨ Exploring the Hidden Features of GitHub 🚀💡' category="Github"  logo='https://plus.unsplash.com/premium_photo-1686593923007-218c4db786ca?q=80&w=3095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  />
        </div>
        </>
    );
    }

export default Blog;