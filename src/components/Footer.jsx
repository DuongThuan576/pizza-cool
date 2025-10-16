// MyFooter.jsx
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function MyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo + Hotline */}
        <div className={styles.logoSection}>
          <img src="/img/logo.jpg" alt="Pizza Cool" className={styles.logo} />
        </div>

        {/* Giới thiệu */}
        <div className={styles.column}>
          <h4>GIỚI THIỆU</h4>
          <ul>
            <a href="#">
              <li>Hệ thống nhà hàng</li>
            </a>
            <a href="#">
              <li>Câu chuyện thương hiệu</li>
            </a>
            <a href="#">
              <li>Tin tức & sự kiện</li>
            </a>
            <a href="#">
              <li>Tuyển dụng</li>
            </a>
          </ul>
        </div>

        {/* Liên hệ */}
        <div className={styles.column}>
          <h4>LIÊN HỆ</h4>
          <ul>
            <a href="#">
              <li>Hướng dẫn mua hàng</li>
            </a>
            <a href="#">
              <li>Chính sách mua hàng</li>
            </a>
            <a href="#">
              <li>Chính sách bảo mật</li>
            </a>
            <a href="#">
              <li>Điều khoản & Điều kiện</li>
            </a>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div className={styles.column}>
          <h4>TỔNG ĐÀI HỖ TRỢ</h4>
          <p>
            Đặt hàng: <b>1900 1010</b> (9:30 – 21:30)
          </p>
          <p>
            CSKH: <b>1900 1010</b> (9:30 – 21:30)
          </p>
        </div>

        {/* Mạng xã hội */}
        <div className={styles.social}>
          <h4>LIÊN KẾT VỚI CHÚNG TÔI</h4>
          <div className={styles.icons}>
            <FaFacebookF />{" "}
            {/*Sau này làm 1 page Facebook thêm hình ảnh Pizza để link tới*/}
            <FaInstagram />{" "}
            {/*Sau này làm 1 page Instagram thêm hình ảnh Pizza để link tới*/}
          </div>
        </div>
      </div>

      <p className={styles.copy}>
        Bản quyền © 2025 Pizza Cool. Đã đăng ký bản quyền bởi NHÓM 10.
      </p>
    </footer>
  );
}

export default MyFooter;
