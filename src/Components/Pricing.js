import React from 'react'

function Pricing() {
    const data = [
        {
            name:"Free",
            price:"0",
            user:"Single User",
            storage:"5GB storage"
        },
        {
            name:"Plus",
            price:"9",
            user:"5 User",
            storage:"50GB storage"
        },
        {
            name:"Pro",
            price:"49",
            user:"Unlimited User",
            storage:"150GB storage",
            domain:"Unlimited"
        },
    ]
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {
            data.map((item)=>{
                return  <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{item.name}</h5>
                    <h6 class="card-price text-center">${item.price}<span class="period">/month</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.name==="Free"?item.user:<b>{item.user}</b>}</li>
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.storage}</li>
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
                      <li class={item.name==="Free"?"text-muted":""}><span class="fa-li"><i class={item.name==="Free"?"fa fa-times":"fa fa-check"}></i></span>Unlimited
                        Private Projects</li>
                      <li class={item.name==="Free"?"text-muted":""}><span class="fa-li"><i class={item.name==="Free"?"fa fa-times":"fa fa-check"}></i></span>Dedicated
                        Phone Support</li>
                        <li class={item.name==="Free"?"text-muted":""}><span class="fa-li"><i class={item.name==="Free"?"fa fa-times":"fa fa-check"}></i></span>
                      {item.domain!=null}<b>{item.domain}</b> Free Subdomain</li>
                        <li class={item.name==="Pro" ?"":"text-muted"}><span class="fa-li"><i class={item.name==="Pro"?"fa fa-check":"fa fa-times"}></i></span>
                        Monthly Status
                        Reports</li>
                      
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            })
        }
      
       
       
        
      </div>
    </div>
  </section>
  )
}

export default Pricing