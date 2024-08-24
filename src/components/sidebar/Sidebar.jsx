"use client"

import Image from "next/image";
import  "./style.css"

import { Julee } from 'next/font/google'
import { Permanent_Marker } from "next/font/google";
import Link from "next/link";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import SendApt from "../SendApt";

export const permanentMarker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400'], // Specify the font weights you need
})

export default function Sidebar() {
    
    return (
        <nav className="sidebar" >
            <div className={permanentMarker.className}>
                <div className="flex justify-start items-center flex-row ml-2 mt-2">
                    <div className="bg-cyan-400 text-4xl p-2 px-3 rounded-full">G</div>
                    <span className="text-2xl text-white ml-5 overflow-hidden mt-2">Gigster</span>
                </div>
            </div>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                    

                        <li className="mb-6">
                            <a href="#">    
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#898989" d="M19 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><path fill="#898989" fill-rule="evenodd" d="M9.944 3.25h3.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.924.925 1.219 2.163 1.326 3.77c.577.253 1.013.79 1.06 1.47c.005.061.005.126.005.186v3.866c0 .06 0 .125-.004.185c-.048.68-.484 1.218-1.061 1.472c-.107 1.606-.402 2.844-1.326 3.769c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m10.224 12.5H18.23c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75h1.938c-.114-1.341-.371-2.05-.87-2.548c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-3c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h3c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.499-.498.756-1.206.87-2.548M5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m15.674 1.75H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236V9.986c-.007-.084-.096-.223-.302-.235z" clip-rule="evenodd"/></svg>
                                <span className="text nav-text"><WalletSelector /></span>
                            </a>                  
                        </li>

                        <li className="nav-link">
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#898989" d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.25.25 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301l2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.94.94 0 0 1-.663.275"/><path fill="#898989" d="M2.625 12A9.375 9.375 0 0 0 12 21.375A9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3c0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12S5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.4 9.4 0 0 0 12 2.625A9.375 9.375 0 0 0 2.625 12"/><path fill="#898989" d="M7.125 12a4.874 4.874 0 1 0 9.717-.569a.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253a6.376 6.376 0 0 1 5.236-10.844a.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12"/></svg>
                                <span className="text nav-text">Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-link">
                            <Link href="/create-gig">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#898989" d="M17.923 12.5v-1h3.23v1zm1.085 6.462l-2.585-1.939l.623-.792l2.585 1.938zm-2.039-11.27l-.623-.792l2.585-1.939l.623.793zM5.5 17.962v-3.808H2.846V9.846h5.346L12.154 7.5v9l-3.962-2.346H6.5v3.808zm5.654-3.243V9.281l-2.681 1.565H3.846v2.308h4.627zm2.769.17V9.112q.502.465.809 1.222T15.038 12t-.306 1.666t-.809 1.222M7.5 12"/></svg>
                                <span className="text nav-text">Create Gigs</span>
                            </Link>
                        </li>

                        <li className="nav-link">
                            <a href="/influencer/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#898989" d="M14 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 14 12.25m0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 14 6.25m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75M8.32 13.06H8a3 3 0 1 1 .58-6a.75.75 0 1 1-.15 1.49a1.46 1.46 0 0 0-1.09.34a1.47 1.47 0 0 0-.54 1a1.49 1.49 0 0 0 1.35 1.64a1.53 1.53 0 0 0 .93-.22a.75.75 0 0 1 .79 1.28a3 3 0 0 1-1.55.47M3 18.5a.76.76 0 0 1-.75-.75c0-2.7.72-4.5 4.25-4.5a.75.75 0 0 1 0 1.5c-2.35 0-2.75.75-2.75 3a.76.76 0 0 1-.75.75"/></svg>
                            <span className="text nav-text">Hunter</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <Link href="/notifications">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#898989"><path d="M2.53 14.77c-.213 1.394.738 2.361 1.902 2.843c4.463 1.85 10.673 1.85 15.136 0c1.164-.482 2.115-1.45 1.902-2.843c-.13-.857-.777-1.57-1.256-2.267c-.627-.924-.689-1.931-.69-3.003C19.525 5.358 16.157 2 12 2S4.475 5.358 4.475 9.5c0 1.072-.062 2.08-.69 3.003c-.478.697-1.124 1.41-1.255 2.267"/><path d="M8 19c.458 1.725 2.076 3 4 3c1.925 0 3.541-1.275 4-3"/></g></svg>
                            <span className="text nav-text">Notifications</span>
                            </Link>
                        </li>

                        {/* <li className="nav-link">
                            <Link href="/chatting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#898989" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"/><path fill="#898989" d="M8 10h16v2H8zm0 6h10v2H8z"/></svg>
                            <span className="text nav-text">Chat</span>
                            </Link>
                        </li> */}
                        
                        <li className="nav-link">
                            <a href="#howitswork">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path fill="none" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m344 280l88-88m-200 24l64 64M80 320l104-104"/><circle cx="456" cy="168" r="24" fill="none" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="320" cy="304" r="24" fill="none" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="208" cy="192" r="24" fill="none" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="56" cy="344" r="24" fill="none" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                <span className="text nav-text">Analytics</span>
                            </a>
                        </li>
                        <li><SendApt /></li>
                    </ul>
                </div>

                <div className="bottom-content">

                </div>
            </div>
        </nav>
    )
}