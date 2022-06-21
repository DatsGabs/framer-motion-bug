import { products } from "../utils/products.js"

import { motion } from "framer-motion"

import styles from "../styles/Home.module.scss"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className={styles.featured}>
            {products.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                    <motion.a
                        className={styles.product}
                        layoutId={`product-${product.id}`}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </motion.a>
                </Link>
            ))}
        </div>
    )
}
