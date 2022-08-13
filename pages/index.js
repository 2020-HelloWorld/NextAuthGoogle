import Head from 'next/head'
import Image from 'next/image'
import LineChart from '../components/lineChart'
import PieChart from '../components/pieChart'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <LineChart></LineChart>
    <PieChart></PieChart>
    </div>
  )
}
