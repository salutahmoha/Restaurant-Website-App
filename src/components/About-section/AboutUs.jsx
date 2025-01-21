import React from 'react'
import about from "../../assets/ab1.jpg"
import './AboutUs.css'
function AboutUs() {
  return (
    <section id='about'>
        <h3>About Us</h3>
        <div className="about-container">
            <div className='about-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta ex nemo nam in, tempore incidunt itaque a obcaecati ut. Perspiciatis amet ut eaque. Eveniet commodi fugit laboriosam ducimus hic laudantium quam nihil vero quis velit cupiditate alias nemo, natus dolorum obcaecati eius, dicta recusandae? Dolorum praesentium iste saepe earum quas fuga delectus doloribus dicta tempore ut perspiciatis itaque, laborum veniam quos aperiam nobis repellat nisi mollitia repellendus. Sapiente aliquid assumenda saepe rem nisi? Amet blanditiis rerum, dolore ipsam qui saepe asperiores, esse ullam at nemo fuga inventore ea quidem dolor voluptatum ipsa molestias velit a non. Commodi aspernatur expedita architecto, nemo repellat, reiciendis excepturi quis deserunt culpa asperiores nulla et cupiditate ipsam dolores inventore odit id quia minima pariatur? Error, labore incidunt? Magnam eaque dolore quasi autem rerum laudantium deleniti voluptatibus ipsum recusandae placeat blanditiis, officia deserunt officiis. Dignissimos, adipisci nostrum praesentium nihil, laboriosam accusantium vel excepturi impedit quam error et minima ratione sunt saepe mollitia laudantium temporibus. Ipsum exercitationem asperiores quisquam voluptatem, voluptate quaerat repellat iusto praesentium necessitatibus accusantium laborum harum unde numquam soluta nostrum. Sit in facere ad ut unde vel pariatur distinctio quisquam velit libero nostrum enim optio vero impedit laudantium commodi neque, consequuntur ab ex?
                repellat iusto praesentium necessitatibus accusantium laborum harum unde numquam soluta nostrum. Sit in facere ad ut unde vel pariatur distinctio quisquam velit libero nostrum enim optio vero impedit laudantium commodi neque, consequuntur ab ex?
                </p>
            </div>
            <div className='about-image'>
                <img src={about} alt="" />
            </div>
        </div>
    </section>
  )
}

export default AboutUs