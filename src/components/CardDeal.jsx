// import { card2 } from '../assets'
import image from '../Constants/card4.png'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a your
                    <span className='text-gradient'> Desired deal </span> {" "}
                    <br className="sm:block hidden" /> in few easy
                    steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    "Elevate your design game with our exclusive Card Deal! Unleash your creativity and save big on our premium graphic resources. From stunning templates to captivating visuals, our Card Deal offers a curated selection that caters to all your design needs. Don't miss out on this limited-time opportunity to enhance your projects while staying within budget. Upgrade your designs today!"
                </p>

                <Button styles={`mt-10`} />
            </div>

            <div className={layout.sectionImg}>
                <img src={image} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
        </section>

    )
}

export default CardDeal