import { Lavender } from './Lavender'

export function Certification() {
    return (
        <div className="flex-h-center margin-t-l margin-b-l cream">
            <div id="certification-container">
                <h1 id="certification-title">Education and Certifications:</h1>
                <br/>
                <p className="paragraph">
                    &emsp; University of North Carolina Chapel Hill
                </p>
                <p className="paragraph">
                    &emsp; Master of Social Work: Direct Practice
                </p>
                <p className="paragraph">
                    &emsp; Specialization: Addiction assessment and treatment
                </p>
                <br/>
                <p className="paragraph">
                    &emsp; Licensed Clinical Social Worker
                </p>
                <p className="paragraph">
                    &emsp; State of Colorado
                </p>
                <p className="paragraph">
                    &emsp; CSW.09929340
                </p>
                <br/>
                <p className="paragraph">
                    <a href="https://www.swtraumatraining.com/2024-post-traumatic-growth-training" target="_blank">
                        <Lavender>
                            &emsp; Post Traumatic Growth
                        </Lavender>
                    </a>
                </p>
                <p className="paragraph">
                    &emsp; All modules completed May 2024
                </p>
            </div>
        </div>
    )
}