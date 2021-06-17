import React from 'react'
import Area from './style.js'
import Typical from "react-typical";

const Typing = (props) => {
    return (
        <div className={props.className}>
            <Area>
                <h1>
                    <Typical
                        steps={[
                            'Desenvolvedor Web', 5000,
                            'Desenvolvedor React', 5000,
                            'Desenvolvedor Vue.js', 5000,
                            'Desenvolvedor Node.js', 5000,
                            'Desenvolvedor PHP ', 5000,
                        ]}
                        loop={Infinity}
                        wrapper="h1"
                    />
                </h1>
            </Area>
        </div>
    );
}
export default Typing;
