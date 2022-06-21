import { motion } from "framer-motion"
import { products } from "../../utils/products"

import styles from "../../styles/Product.module.scss"

import Image from "next/image"

export default function ProductPage({ product }) {
    return (
        <motion.div
            layoutId={`product-${product.id}`}
            className={styles.banner}
        >
            <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
            />
        </motion.div>
    )
}

export async function getServerSideProps({ params }) {
    const product = products.filter((product) => product.id === params.id)[0]
    return {
        props: {
            product,
        },
    }
}
