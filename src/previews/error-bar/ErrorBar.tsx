import React, { FC } from 'react';
import { concatClassnames } from '../../util/ConcatClassNames';

/** A preview for the errorbar to see changes live */
const ErrorBar: FC = () => {
    return (
        <div className='preview-container error-bar-container'>
            <div className='rc-glasspane' />
            <div className='comp-container'>
                <div className="rc-error-bar" tabIndex={0}>
                    <div className="rc-error-bar-header">
                        <i className={concatClassnames("rc-error-bar-header-icon", "pi", "pi-times-circle")} />
                        <span className="rc-error-bar-header-text">Example ErrorBar!</span>
                    </div>
                    <div className="rc-error-bar-content">
                        <span dangerouslySetInnerHTML={{ __html: "This is an Example for the ErrorBar. <u>Click here!</u> or press Escape to retry!" }} />
                    </div>
                </div>
            </div>
            <div className='comp-container'>
                <div className="rc-error-bar app-gone" tabIndex={0}>
                    <div className="rc-error-bar-header">
                        <i className={concatClassnames("rc-error-bar-header-icon", "pi", "pi-times-circle")} />
                        <span className="rc-error-bar-header-text">Example ErrorBar Gone!</span>
                    </div>
                    <div className="rc-error-bar-content">
                        <span dangerouslySetInnerHTML={{ __html: "This is an Example for the ErrorBar Gone. <u>Click here!</u> or press Escape to retry!" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ErrorBar