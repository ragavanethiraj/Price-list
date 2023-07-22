import React, { useState } from 'react'

function Profile() {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
    console.log(count)
    return (
        <div>
            <button className='btn btn-sm btn-outline-danger m-2' onClick={() => setCount(count - 1)} disabled={count<=0}>-</button>
            {count}
            <button className='btn btn-sm btn-outline-primary m-2' onClick={() => setCount(count + 1)}>+</button>

            <button onClick={() => setShow(!show)}>Click</button>
            {
                show ? <p>
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
                    Line 31:33:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you
                    cannot provide an href, but still need the element
                </p> : ""
            }

        </div>
    )
}

export default Profile