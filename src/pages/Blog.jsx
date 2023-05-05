import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {

    return (
        <div>
            <div ref={ref} className='my-container bg-white'>
                <h1 className='text-center text-5xl my-3'>Here is the ans of 4 Questions</h1>
                <Pdf targetRef={ref} filename="Blog.pdf">
                    {({ toPdf }) => <button className='my-button mb-3' onClick={toPdf}>Download Pdf</button>}
                </Pdf>
                <div className=' '>

                    <h3 className='text-2xl font-bold text-gray-600'>Tell us the differences between uncontrolled and controlled components</h3>
                    <p className='font-md mt-2 '>
                        Controlled and uncontrolled components are ways to manage data. in controled component parent component responsible for manage child state and data passing.on the otherhand uncontroled components manage his own state internally
                    </p>
                </div>
                <hr className='my-3' />

                <div className=' '>
                    <h3 className='text-2xl font-bold text-gray-600'>How to validate React props using PropTypes ?</h3>
                    <p className='font-md mt-2 '>
                        <code>
                            for validate props type first need to

                            <li> 1. install prop-types package</li>
                            <li> 2. import the package : import PropTypes from 'prop-types';</li>
                            <li> 3. difind props type by using propTypes object : functionName.propTypes</li>
                        </code>
                    </p>
                </div>
                <hr className='my-3' />
                <div className=' '>
                    <h3 className='text-2xl font-bold text-gray-600'>Tell us the difference between nodejs and express js.</h3>
                    <p className='font-md mt-2 '>

                        node js is a javascript runtime environment that's allows to run javascript on server. it provide scalable networ, i/o mode and and so on.
                        <br />

                        express js is a frameworks of node js,It simplifies the tasks of NodeJS. And provides some important components like routing, middleware, templates etc.
                    </p>
                </div>
                <hr className='my-3' />
                <div className=' '>
                    <h3 className='text-2xl font-bold text-gray-600'>Tell us the difference between nodejs and express js.</h3>
                    <p className='font-md mt-2 '>

                        node js is a javascript runtime environment that's allows to run javascript on server. it provide scalable networ, i/o mode and and so on.
                        <br />

                        express js is a frameworks of node js,It simplifies the tasks of NodeJS. And provides some important components like routing, middleware, templates etc.
                    </p>
                </div>
                <hr className='my-3' />
                <div className=' '>
                    <h3 className='text-2xl font-bold text-gray-600'>What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='font-md mt-2 '>
                        custom hook is special function provided by rect it's allow to share data or functionality with multiple components. by using this we create reusable component, it's easer to understand and improve code readability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;