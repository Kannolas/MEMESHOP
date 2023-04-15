import React from "react";
function Roadmap(){
    return(
        <div className="Roadmap">
            <div className="roadmap-title">
                <div className="roadmap-logo">
                    <div className="roadmap-logo-text1">ROA</div>
                    <div className="roadmap-logo-rect"></div>
                    <div className="roadmap-logo-text2">MAP</div>
                </div>
                <div className="roadmap-text">
                    It's easier than ever to make an order
                </div>
            </div>

            <div className="roadmap-stages">
                
                <div className="stage1">
                    <div className="stage1-rect"></div>
                    <div className="step1">Step 1</div>
                    <div className="stage1-openc">Open the catalog</div>
                    <div className="stage1-toptab">Top tab</div>
                    
                </div>

                <div className="stage2">
                    <div className="stage2-rect"></div>
                    <div className="step2">Step 2</div>
                    <div className="stage2-choose">Chose a product</div>
                    <div className="stage2-sure">We are sure that you will find what you will like</div>
                    
                </div>

                <div className="stage3">
                    <div className="stage3-rect"></div>
                    <div className="step3">Step 3</div>
                    <div className="stage3-add">Add to cart</div>
                    <div className="stage3-simple">It's very simple</div>
                    
                </div>


                <div className="stage4">
                    <div className="stage4-rect"></div>
                    <div className="step4">Step 4</div>
                    <div className="stage4-choose">Choose the adress and delivery method</div>
                    <div className="stage4-details">Details of payment and delivery methods in your personal account</div>
                    
                </div>


                <img src="images/RoadmapElipse.svg" alt="" className="elipse elipses1" />
                <img src="images/RoadmapElipse.svg" alt="" className="elipse elipses2" />
                <img src="images/RoadmapElipse.svg" alt="" className="elipse elipses3" />
               
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="leha-roadmap"></div>
                <div  className="katya-roadmap"></div>
                <div className="vanya-roadmap"></div>
                <div className="pablo-roadmap"></div>
                
            </div>


        </div>
    )
}

export default Roadmap;