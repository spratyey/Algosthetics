
export default function TitleAnim() {
  return (
    
    <body>
      
      <div className="container">
        <style jsx>{`
         

         
          .container {
         
          height: auto;
          margin: 0;
          padding: 10px;
          position: relative;
          font-size: '20';
        }
        .container > div {
          position: absolute;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          background-color: hsl(calc(160 + 18 * var(--translate)), 58%, 66%);
          mix-blend-mode: difference;
          -webkit-animation: move 10s calc(-10s + var(--translate) * 0.15s) ease-in-out infinite;
                  animation: move 10s calc(-10s + var(--translate) * 0.15s) ease-in-out infinite;
        }
        @-webkit-keyframes move {
          0%, 10%, 100% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 1em)) scale(1);
          }
          25%, 35% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 1em)) scale(2);
          }
          50%, 60% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 0.5em)) scale(0.5);
          }
          75%, 85% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 0.5em)) scale(1);
          }
        }
        @keyframes move {
          0%, 10%, 100% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 1em)) scale(1);
          }
          25%, 35% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 1em)) scale(2);
          }
          50%, 60% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 0.5em)) scale(0.5);
          }
          75%, 85% {
            transform: rotate(var(--rotate)) translateY(calc(var(--translate) * 0.5em)) scale(1);
          }
        }
        .container > div:nth-child(1) {
          --rotate: 0deg;
          --translate: 1;
        }
        .container > div:nth-child(7) {
          --rotate: 0deg;
          --translate: 2;
        }
        .container > div:nth-child(13) {
          --rotate: 30deg;
          --translate: 1.73;
        }
        .container > div:nth-child(19) {
          --rotate: 0deg;
          --translate: 3;
        }
        .container > div:nth-child(25) {
          --rotate: 19.1deg;
          --translate: 2.65;
        }
        .container > div:nth-child(31) {
          --rotate: 40.9deg;
          --translate: 2.65;
        }
        .container > div:nth-child(37) {
          --rotate: 0deg;
          --translate: 4;
        }
        .container > div:nth-child(43) {
          --rotate: 13.9deg;
          --translate: 3.61;
        }
        .container > div:nth-child(49) {
          --rotate: 30deg;
          --translate: 3.47;
        }
        .container > div:nth-child(55) {
          --rotate: 46.1deg;
          --translate: 3.61;
        }
        .container > div:nth-child(61) {
          --rotate: 0deg;
          --translate: 5;
        }
        .container > div:nth-child(67) {
          --rotate: 10.9deg;
          --translate: 4.59;
        }
        .container > div:nth-child(73) {
          --rotate: 23.4deg;
          --translate: 4.36;
        }
        .container > div:nth-child(79) {
          --rotate: 36.6deg;
          --translate: 4.36;
        }
        .container > div:nth-child(85) {
          --rotate: 49.1deg;
          --translate: 4.59;
        }
        .container > div:last-child {
          --rotate: 0deg;
          --translate: 0;
        }
        .container > div:nth-child(2) {
          --rotate: 60deg;
          --translate: 1;
        }
        .container > div:nth-child(8) {
          --rotate: 60deg;
          --translate: 2;
        }
        .container > div:nth-child(14) {
          --rotate: 90deg;
          --translate: 1.73;
        }
        .container > div:nth-child(20) {
          --rotate: 60deg;
          --translate: 3;
        }
        .container > div:nth-child(26) {
          --rotate: 79.1deg;
          --translate: 2.65;
        }
        .container > div:nth-child(32) {
          --rotate: 100.9deg;
          --translate: 2.65;
        }
        .container > div:nth-child(38) {
          --rotate: 60deg;
          --translate: 4;
        }
        .container > div:nth-child(44) {
          --rotate: 73.9deg;
          --translate: 3.61;
        }
        .container > div:nth-child(50) {
          --rotate: 90deg;
          --translate: 3.47;
        }
        .container > div:nth-child(56) {
          --rotate: 106.1deg;
          --translate: 3.61;
        }
        .container > div:nth-child(62) {
          --rotate: 60deg;
          --translate: 5;
        }
        .container > div:nth-child(68) {
          --rotate: 70.9deg;
          --translate: 4.59;
        }
        .container > div:nth-child(74) {
          --rotate: 83.4deg;
          --translate: 4.36;
        }
        .container > div:nth-child(80) {
          --rotate: 96.6deg;
          --translate: 4.36;
        }
        .container > div:nth-child(86) {
          --rotate: 109.1deg;
          --translate: 4.59;
        }
        .container > div:last-child {
          --rotate: 0deg;
          --translate: 0;
        }
        .container > div:nth-child(3) {
          --rotate: 120deg;
          --translate: 1;
        }
        .container > div:nth-child(9) {
          --rotate: 120deg;
          --translate: 2;
        }
        .container > div:nth-child(15) {
          --rotate: 150deg;
          --translate: 1.73;
        }
        .container > div:nth-child(21) {
          --rotate: 120deg;
          --translate: 3;
        }
        .container > div:nth-child(27) {
          --rotate: 139.1deg;
          --translate: 2.65;
        }
        .container > div:nth-child(33) {
          --rotate: 160.9deg;
          --translate: 2.65;
        }
        .container > div:nth-child(39) {
          --rotate: 120deg;
          --translate: 4;
        }
        .container > div:nth-child(45) {
          --rotate: 133.9deg;
          --translate: 3.61;
        }
        .container > div:nth-child(51) {
          --rotate: 150deg;
          --translate: 3.47;
        }
        .container > div:nth-child(57) {
          --rotate: 166.1deg;
          --translate: 3.61;
        }
        .container > div:nth-child(63) {
          --rotate: 120deg;
          --translate: 5;
        }
        .container > div:nth-child(69) {
          --rotate: 130.9deg;
          --translate: 4.59;
        }
        .container > div:nth-child(75) {
          --rotate: 143.4deg;
          --translate: 4.36;
        }
        .container > div:nth-child(81) {
          --rotate: 156.6deg;
          --translate: 4.36;
        }
        .container > div:nth-child(87) {
          --rotate: 169.1deg;
          --translate: 4.59;
        }
        .container > div:last-child {
          --rotate: 0deg;
          --translate: 0;
        }
        .container > div:nth-child(4) {
          --rotate: 180deg;
          --translate: 1;
        }
        .container > div:nth-child(10) {
          --rotate: 180deg;
          --translate: 2;
        }
        .container > div:nth-child(16) {
          --rotate: 210deg;
          --translate: 1.73;
        }
        .container > div:nth-child(22) {
          --rotate: 180deg;
          --translate: 3;
        }
        .container > div:nth-child(28) {
          --rotate: 199.1deg;
          --translate: 2.65;
        }
        .container > div:nth-child(34) {
          --rotate: 220.9deg;
          --translate: 2.65;
        }
        .container > div:nth-child(40) {
          --rotate: 180deg;
          --translate: 4;
        }
        .container > div:nth-child(46) {
          --rotate: 193.9deg;
          --translate: 3.61;
        }
        .container > div:nth-child(52) {
          --rotate: 210deg;
          --translate: 3.47;
        }
        .container > div:nth-child(58) {
          --rotate: 226.1deg;
          --translate: 3.61;
        }
        .container > div:nth-child(64) {
          --rotate: 180deg;
          --translate: 5;
        }
        .container > div:nth-child(70) {
          --rotate: 190.9deg;
          --translate: 4.59;
        }
        .container > div:nth-child(76) {
          --rotate: 203.4deg;
          --translate: 4.36;
        }
        .container > div:nth-child(82) {
          --rotate: 216.6deg;
          --translate: 4.36;
        }
        .container > div:nth-child(88) {
          --rotate: 229.1deg;
          --translate: 4.59;
        }
        .container > div:last-child {
          --rotate: 0deg;
          --translate: 0;
        }
        .container > div:nth-child(5) {
          --rotate: 240deg;
          --translate: 1;
        }
        .container > div:nth-child(11) {
          --rotate: 240deg;
          --translate: 2;
        }
        .container > div:nth-child(17) {
          --rotate: 270deg;
          --translate: 1.73;
        }
        .container > div:nth-child(23) {
          --rotate: 240deg;
          --translate: 3;
        }
        .container > div:nth-child(29) {
          --rotate: 259.1deg;
          --translate: 2.65;
        }
        .container > div:nth-child(35) {
          --rotate: 280.9deg;
          --translate: 2.65;
        }
        .container > div:nth-child(41) {
          --rotate: 240deg;
          --translate: 4;
        }
        .container > div:nth-child(47) {
          --rotate: 253.9deg;
          --translate: 3.61;
        }
        .container > div:nth-child(53) {
          --rotate: 270deg;
          --translate: 3.47;
        }
        .container > div:nth-child(59) {
          --rotate: 286.1deg;
          --translate: 3.61;
        }
        .container > div:nth-child(65) {
          --rotate: 240deg;
          --translate: 5;
        }
        .container > div:nth-child(71) {
          --rotate: 250.9deg;
          --translate: 4.59;
        }
        .container > div:nth-child(77) {
          --rotate: 263.4deg;
          --translate: 4.36;
        }
        .container > div:nth-child(83) {
          --rotate: 276.6deg;
          --translate: 4.36;
        }
        .container > div:nth-child(89) {
          --rotate: 289.1deg;
          --translate: 4.59;
        }
        .container > div:last-child {
          --rotate: 0deg;
          --translate: 0;
        }
        .container > div:nth-child(6) {
          --rotate: 300deg;
          --translate: 1;
        }
        .container > div:nth-child(12) {
          --rotate: 300deg;
          --translate: 2;
        }
        .container > div:nth-child(18) {
          --rotate: 330deg;
          --translate: 1.73;
        }
        .container > div:nth-child(24) {
          --rotate: 300deg;
          --translate: 3;
        }
        .container > div:nth-child(30) {
          --rotate: 319.1deg;
          --translate: 2.65;
        }
        .container > div:nth-child(36) {
          --rotate: 340.9deg;
          --translate: 2.65;
        }
        .container > div:nth-child(42) {
          --rotate: 300deg;
          --translate: 4;
        }
        .container > div:nth-child(48) {
          --rotate: 313.9deg;
          --translate: 3.61;
        }
        .container > div:nth-child(54) {
          --rotate: 330deg;
          --translate: 3.47;
        }
        .container > div:nth-child(60) {
          --rotate: 346.1deg;
          --translate: 3.61;
        }
        .container > div:nth-child(66) {
          --rotate: 300deg;
          --translate: 5;
        }
        .container > div:nth-child(72) {
          --rotate: 310.9deg;
          --translate: 4.59;
        }
        .container > div:nth-child(78) {
          --rotate: 323.4deg;
          --translate: 4.36;
        }
        .container > div:nth-child(84) {
          --rotate: 336.6deg;
          --translate: 4.36;
        }
        .container > div:nth-child(90) {
          --rotate: 349.1deg;
          --translate: 4.59;
        }
        .container > div:last-child {
          --rotate: 0deg;
          --translate: 0;
        }
        `}</style>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </body>
  )
}