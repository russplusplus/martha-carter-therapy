import { Lavender } from "./Lavender"
import { FadeInOnScroll } from "./FadeInOnScroll"

export function Certification() {
    return (
        <div className="flex-h-center margin-t-l margin-b-l cream prevent-select">
            <div id="certification-container">
                <FadeInOnScroll>
                    <h1 id="certification-title">Education and Certifications:</h1>
                    <br/>
                    <p className="paragraph">
                        Master of Social Work: Direct Practice
                    </p>
                    <p className="paragraph">
                        Specialization: Addiction Assessment and Treatment
                    </p>
                    <p className="paragraph">
                        University of North Carolina Chapel Hill
                    </p>
                    <br/>
                    <p className="paragraph">
                        Licensed Clinical Social Worker
                    </p>
                    <p className="paragraph">
                        State of Colorado
                    </p>
                    <p className="paragraph">
                        CSW.09929340
                    </p>
                    <br/>
                    <p className="paragraph">
                        <a href="https://www.swtraumatraining.com/2024-post-traumatic-growth-training" target="_blank">
                            <Lavender>
                                Post Traumatic Growth
                            </Lavender>
                        </a>
                    </p>
                    <p className="paragraph">
                        All modules completed May 2024
                    </p>
                </FadeInOnScroll>
            </div>
        </div>
    )
}