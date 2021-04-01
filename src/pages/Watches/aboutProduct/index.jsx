import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.scss'
import AboutProductImg1 from '../../../assets/aboutProduct-1.jpg'
function AboutProduct() {
    return (
        <section className="about_product">
            <div className="container">
                <Tabs>
                    <TabList className="about_product-tabs">
                        <Tab className="about_product-tab"><h4 className="about_product-title">Detail</h4></Tab>
                        <Tab className="about_product-tab"><h4 className="about_product-title">Warranty</h4></Tab>
                        <Tab className="about_product-tab"><h4 className="about_product-title">Custom Engrave</h4></Tab>
                        <Tab className="about_product-tab"><h4 className="about_product-title">How to Adjust</h4></Tab>
                        <Tab className="about_product-tab"><h4 className="about_product-title">How to Care</h4></Tab>
                        <Tab className="about_product-tab"><h4 className="about_product-title">Gallery</h4></Tab>
                    </TabList>

                    <div className="about_product-content">
                         <TabPanel className="about_product-item">
                            <h5 className="about_product-suptitle">Material</h5>
                            <p className="about_product-text">MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</p>
                            <h5 className="about_product-suptitle">Case</h5>
                            <p className="about_product-text">The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</p>
                            <h5 className="about_product-suptitle">Movement</h5>
                            <p className="about_product-text">For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</p>
                            <h5 className="about_product-suptitle">Dial</h5>
                            <p className="about_product-text">In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</p>
                            <h5 className="about_product-suptitle">Hand</h5>
                            <p className="about_product-text">The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</p>
                            <h5 className="about_product-suptitle">Important to Note</h5>
                            <p className="about_product-text">Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</p>
                            <img className="about_product-img" src={AboutProductImg1} alt="" />
                        </TabPanel>
                        <TabPanel className="about_product-item">
                            <h5 className="about_product-suptitle">Matoa Guarantee</h5>
                            <p className="about_product-text">Thank you for choosing MATOA and joining us in experimenting with nature.</p>
                            <p className="about_product-text">Your MATOA watch has a warranty period of 1 year after purchase through the Website, Customer Service and Stockist. Here are some things you need to know about the one year warranty from MATOA:</p>
                            <p className="about_product-text">For a 1 year warranty only applies to the movement of the body and chain warranty is valid for 6 months</p>
                            <h5 className="about_product-suptitle">Improper Use and Damage</h5>
                            <p className="about_product-text">This warranty covers defects in material or workmanship. We will also repair damage to the watch due to personal errors such as broken body due to certain cases, exposure to excessive water, damage to the engine, etc. The warranty does not apply with respect to a product that has been disassembled or repaired by a different owner or person.</p>
                            <h5 className="about_product-suptitle">Have a Valid Proof of Payment</h5>
                            <p className="about_product-text">This guarantee is effective if you include a purchase receipt or warranty card. During the warranty period, you have the right to repair your watch free of charge.</p>
                            <p className="about_product-text">If you experience any problems with your watch, please visit the 'Service Center' on our website and fill out the form. We'll call you to confirm and tell you to follow the next instructions.</p>
                          </TabPanel>
                        <TabPanel className="about_product-item">
                            333333333333333
                          </TabPanel>
                        <TabPanel className="about_product-item">
                            444444444444444444444444
                          </TabPanel>
                        <TabPanel className="about_product-item">
                            55555555555555555
                                 </TabPanel>
                        <TabPanel className="about_product-item">
                            66666666666666666666
                          </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default AboutProduct
