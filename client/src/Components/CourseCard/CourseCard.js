import React from 'react'
import MyCourse from './MyCourse'
import data from './data'

const CourseCard = () => {
    return (
        <>
            <h1 className="text-left mt-100 ml-50" style={{marginTop: "100px"}}></h1>
            <section className="py-10 container">
                <div className="row justify-content ml-100" style={{marginLeft:"50px"}}>
                    {data.coursedata.map((item,index) => {
                        return(
                            <MyCourse 
                            img={item.image} 
                            title={item.title}
                            price={item.price}
                            hours={item.hours}
                            item={item}
                            key={index} />
                        )
                        })}
                </div>
            </section>
        </>
    )
}

export default CourseCard
