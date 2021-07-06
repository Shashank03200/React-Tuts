
import { useEffect, useState } from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {

    let isInitial = true;
    const [isShowing, setIsShowing] = useState(true);

    useEffect(() => {
        setIsShowing(true)

        return () => {
            setTimeout(() => {
                setIsShowing(false)
            }, 1000)
        }
    }, [props]);
    console.log('dksnvd')
    let specialClasses = '';

    if (props.status === 'error') {
        specialClasses = classes.error;
    }
    if (props.status === 'success') {
        specialClasses = classes.success;
    }



    const cssClasses = `${classes.notification} ${specialClasses} ${isShowing ? '' : classes.fade}`;

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

export default Notification;