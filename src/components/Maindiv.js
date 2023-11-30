import React from 'react'
const Maindiv = () => {
    return (
        <div className='Maindiv'>
            <div className='Maindiv-heading'>Saral Bachat Beema Plan</div>
            <div className='Maindiv-content'>

                <div className='Maindiv-subdiv' id='my-content-div'>
                    <div className='info'>India's first......
                    </div>
                    <div className='highlighted-info'>Proposal date : 19/09/2022</div>
                </div>
                <div className='Maindiv-subdiv'>
                    <div className='subdiv-right-div'>Quote ID: 1234ABC</div>
                    <div className='subdiv-right-div'>SumAssured<span className='input-box'>rs40,00,000</span></div>
                    <div className='subdiv-right-div'>Yearly Premium rs 40,000</div>
                    <div className='subdiv-right-div'>
                        <button id='btn-viewBI'><a href='/'>view BI</a></button>
                        {/* <input id='btn-viewBI' type='button' placeholder='view BI' /> */}
                    </div>
                </div>
            </div>
            <div className='Maindiv-footer'>
                <button className='btn-footer' id='btn-1-footer'>Quick Buy</button>
                <button className='btn-footer' id='btn-2-footer'>Proceed to Proposal</button>
            </div>
        </div>
    )
}

export default Maindiv