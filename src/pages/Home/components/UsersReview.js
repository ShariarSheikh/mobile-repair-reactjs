import React from 'react'
import styles from '../../../styles/components/UsersReview.module.css'
import { ReviewSlider } from './ReviewSlider'

const UsersReview = () => {
    return (
        <div className={styles.UsersReview}>
            <h1 className="text-3xl text-start font-bold mb-5 text-blue-300">Reviews</h1>
            <div className="relative w-full h-full">
                <ReviewSlider/>
            </div>
        </div>
    )
}

export default UsersReview
