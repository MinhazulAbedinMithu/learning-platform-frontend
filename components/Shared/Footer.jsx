import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Footer() {
  return (
    <div className={`${styles.bannerBg} md:p-24 p-12 text-white`}>
      <footer className="footer text-white">
        <aside>
          <p className="text-2xl">
            Online live skills
            <br />
            Development Platform
          </p>
          <p className="text-sm">Elevate your education with our dynamic online
          <br /> 
          learning community, connecting you with experts 
          <br />
          and peers from around the world.</p>
          <p className="text-2xl">Contact Us</p>
          <p className="text-base">01793814458, 01747823951, 01905208828</p>
        </aside>
        <nav>
          <header className="footer-title opacity-100">Useful Links</header>
          <div
            style={{ border: "2px #0F969C solid" }}
            className="w-56"
          ></div>
          <Link href='/' className="link link-hover">Blog</Link>
          <Link href='/' className="link link-hover">Become an Online Teacher</Link>
          <Link href='/' className="link link-hover">How It Works</Link>
          <Link href='/' className="link link-hover">Course Categories</Link>
          <Link href='/' className="link link-hover">Create an Account</Link>
        </nav>
        <nav>
          <header className="footer-title opacity-100">Need Support</header>
          <div
            style={{ border: "2px #0F969C solid" }}
            className="w-56"
          ></div>
          <Link href='/' className="link link-hover">Contact Us</Link>
          <Link href='/' className="link link-hover">FAQ</Link>
          <Link href='/' className="link link-hover">Legal And Policy</Link>
          <Link href='/' className="link link-hover">Privacy Policy</Link>
          <Link href='/' className="link link-hover">Terms and Conditions</Link>
          <Link href='/' className="link link-hover">Purchase and withdraw</Link>
        </nav>
        <nav>
          <header className="footer-title opacity-100">About Our Website</header>
          <div
            style={{ border: "2px #0F969C solid" }}
            className="w-56"
          ></div>
          <Link href='/' className="link link-hover">Contact Us</Link>
          <Link href='/' className="link link-hover">FAQ</Link>
          <Link href='/' className="link link-hover">Legal And Policy</Link>
          <Link href='/' className="link link-hover">Privacy Policy</Link>
          <Link href='/' className="link link-hover">Terms and Conditions</Link>
          <Link href='/' className="link link-hover">Purchase and withdraw</Link>
        </nav>
      </footer>
    </div>
  );
}
