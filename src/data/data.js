import * as AI from "react-icons/ai";
const navLinks = [
    { to: "home", name: "Home" },
    { to: "package", name: "Package" },
    { to: "contact", name: "Contact Us" },
];
const packageNet = [
    { mbps: 100, price: 1500, speed: 107, add: 40 },
    { mbps: 150, price: 2250, speed: 137, add: 70 },
    { mbps: 250, price: 2750, speed: 190, add: 140 },
];
const packageCatv = [
    { mbps: 15, price: 1350, speed: 40, add: -8 },
    { mbps: 30, price: 1600, speed: 50, add: 0 },
    { mbps: 50, price: 1750, speed: 65, add: 13 },
];
const images = [
    require("../img/yout.png"),
    require("../img/google.png"),
    require("../img/faceb.png"),
    require("../img/insta.png"),
    require("../img/netflix.png"),
    require("../img/riot.png"),
];
const algo = [
    require("../img/algo.png"),
    require("../img/algo1.png"),
    require("../img/algo2.png"),
    require("../img/algo3.png"),
];
const newType = [
    { val: "new-tv", name: "Cable Only" },
    { val: "new-net", name: "Internet Only" },
    { val: "new-netv", name: "Cable and Internet" },
];
const existType = [
    { val: "exi-netv", name: "Upgrade to Fiber" },
    { val: "exi-net", name: "Upgrade to Fiber Disconnect CATV" },
    { val: "exi-tv", name: "Upgrade Digital Box" },
];
const plansNet = [
    { val: 1500, mbps: 100 },
    { val: 2250, mbps: 150 },
    { val: 2750, mbps: 250 },
];
const plansTvNet = [
    { val: 1350, mbps: 15 },
    { val: 1600, mbps: 30 },
    { val: 1750, mbps: 50 },
    { val: 1850, mbps: 100 },
    { val: 2600, mbps: 150 },
    { val: 3200, mbps: 250 },
];

const faqs = [
    {
        key: 1,
        title: "No Internet Connection when using my service",
        desc: <>
                • Check if the Wi-Fi is connected, <br />
                • Check if the Wi-Fi modem indicators does not have red light. <br />
                • Check if your monthly bill is paid. <br /> <br />
                <p>
                    If after checking all the above scenarios but still has no
                    connection please contact our technical personnel.
                </p>
            </>,
    },
    {
        key: 2,
        title: "No Cable Signal in my TV",
        desc: 
            <>
                • Check if the HDMI / AV jack is connected. <br />
                • Check if the Cable box has power. <br />
                • Check if the Digital Card is inserted. <br />
                • Check if your monthly bill is paid. <br /> <br />
                <p>
                    If after checking all the above scenarios but still has no
                    connection please contact our technical personnel.
                </p>
            </>,
    },
    {
        key: 3,
        title: "How do I pay my monthly bill?",
        desc: <>
                • Monthly subscriptions can only pay through cash or cheque. <br />
                • Balanga and Pilar area can pay at main office located at Doña Francisca Balanga. <br />
                • Orion area can pay at A3 Money Changer, located at  MCR Building, Arellano, Orion.  <br /> <br />
                <p>
                    Online Transactions such as GCash and Paymaya are not available at the moment.
                </p>
        </>
    },
    {
        key: 4,
        title: "Why do I haven't received my billing statement?",
        desc: <>
                • The billing Statement is produced within the 1st week of the month. <br />
                • Billing Statements are delivered by courier every 2nd week to 3rd week of the month. <br /><br />
                <p>
                If in case of 3rd week has passed and you haven't received your billing statement, contact our billing personnel or visit our main office to inquire.
                </p>
        </>,
    },
    {
        key: 5,
        title: "Why do I receive a billing statement with notice for disconnection when I already paid it?",
        desc: <>
                • The billing statement might be already out for delivery when you transact for payment. <br />
                • The month you thought you paid for might be off. Please keep all Offical Receipts issued by the cashier for your future reference. <br /><br />
                <p>
                    Contact our billing personnel regarding the monthly bill issue.
                </p>
        </>,
    },
];

const channels = [
    { id: 1, hd: false, name: "COMMUNITY CHANNEL", img: "favicon.ico" },
    { id: 2, hd: false, name: "KAPAMILYA CHANNEL", img: "ch_kapamilya.jpg" },
    { id: 4, hd: false, name: "PTV 4", img: "ch_ptv4.png" },
    { id: 5, hd: false, name: "TV 5", img: "ch_tv5.png" },
    { id: 7, hd: false, name: "GMA 7", img: "ch_gma7.png" },
    { id: 9, hd: false, name: "CNN PHILIPPINES", img: "ch_cnnph.png" },
    { id: 11, hd: false, name: "GMA NEWS TV", img: "ch_gtv.jpg" },
    { id: 13, hd: false, name: "IBC 13", img: "ch_ibc13.png" },
    { id: 14, hd: false, name: "AKSYON TV", img: "ch_aksy.png" },
    { id: 23, hd: false, name: "A2Z", img: "ch_a2z.png" },
    { id: 25, hd: false, name: "INC TV", img: "ch_inctv.png" },
    { id: 31, hd: false, name: "ONE MEDIA ", img: "ch_1med.png" },
    { id: 37, hd: false, name: "UNTV", img: "ch_untv.png" },
    { id: 46, hd: true, name: "COB NEWS CENTRAL HD", img: "ch_cob.jpeg" },
    { id: 49, hd: false, name: "NET 25", img: "ch_net25.jpg" },
    { id: 72, hd: false, name: "EWTN ", img: "ch_ewtn.png" },
    { id: 101, hd: false, name: "CARTOON NETWORK", img: "ch_cn.jpg" },
    { id: 103, hd: false, name: "ANIPLUS", img: "ch_ani+.jpg" },
    { id: 104, hd: false, name: "BOOMERANG", img: "ch_boomerang.png" },
    { id: 105, hd: false, name: "KNOWLEDGE CHANNEL", img: "ch_knowledge.jpg" },
    { id: 106, hd: false, name: "DISCOVERY WORLD", img: "ch_discovery.png" },
    { id: 107, hd: false, name: "NICKELODEON", img: "ch_nick.png" },
    { id: 201, hd: false, name: "NATIONAL GEOGRAPHIC", img: "ch_natgeo.jpg" },
    { id: 202, hd: false, name: "NAT GEO WILD", img: "ch_natwild.jpg" },
    { id: 203, hd: false, name: "ANIMAL PLANET", img: "ch_anipla.jpg" },
    { id: 204, hd: false, name: "HISTORY", img: "ch_history.jpg" },
    { id: 205, hd: false, name: "DISCOVERY CHANNEL", img: "ch_disch.svg" },
    { id: 301, hd: true, name: "HBO HD", img: "ch_hbo.jpg" },
    { id: 303, hd: true, name: "CINEMA WORLD HD ", img: "ch_cinwor.jpg" },
    { id: 305, hd: false, name: "DREAMWORKS ", img: "ch_dw.jpg" },
    { id: 306, hd: false, name: "LOTUS MACAU", img: "ch_lm.png" },
    { id: 307, hd: false, name: "CINEMA ONE", img: "ch_cin1.jpg" },
    { id: 308, hd: false, name: "TECHSTORM", img: "ch_tech.jpg" },
    { id: 309, hd: false, name: "PBO (PINOY BOX OFFICE)", img: "ch_pbo.jpg" },
    { id: 310, hd: true, name: "TAP MOVIES", img: "ch_tap.jpg" },
    { id: 311, hd: false, name: "KIX", img: "ch_kix.jpg" },
    { id: 312, hd: false, name: "THRILL", img: "ch_thrill.png" },
    { id: 401, hd: true, name: "PREMIER SPORTS", img: "ch_presp.jpg" },
    { id: 402, hd: false, name: "SOLAR SPORTS", img: "ch_solspo.png" },
    { id: 403, hd: true, name: "PREMIER SPORTS 2", img: "ch_presp2.png" },
    { id: 405, hd: false, name: "PINOY EXTREME", img: "ch_pnoyx.png" },
    { id: 406, hd: false, name: "PARAMOUNT CHANNEL", img: "ch_pnet.jpg" },
    { id: 503, hd: false, name: "SOLAR FLIX", img: "ch_solarf.png" },
    { id: 504, hd: false, name: "SOLAR LEARNING", img: "ch_deped.png" },
    { id: 505, hd: false, name: "SCREAM FLIX", img: "ch_scream.png" },
    { id: 506, hd: false, name: "AXN", img: "ch_axn.jpg" },
    { id: 507, hd: false, name: "HITS MOVIES", img: "ch_hitm.png" },
    { id: 508, hd: false, name: "METRO CHANNEL", img: "ch_mchan.jpg" },
    { id: 512, hd: false, name: "MYX", img: "ch_myx.jpg" },
    { id: 513, hd: false, name: "TLC", img: "ch_tlc.png" },
    { id: 514, hd: false, name: "JEEPNEY TV", img: "ch_jeep.jpg" },
    { id: 515, hd: false, name: "TV 5 MONDE", img: "ch_tvmo.png" },
    { id: 601, hd: false, name: "ANC", img: "ch_anc.png" },
    { id: 602, hd: false, name: "DZMM TELERADYO", img: "ch_dzmm.png" },
    { id: 603, hd: false, name: "ONE NEWS TV", img: "ch_1news.jpg" },
    { id: 604, hd: false, name: "FOX NEWS", img: "ch_foxn.jpg" },
    { id: 605, hd: false, name: "CHANNEL NEWS ASIA", img: "ch_cna.png" },
    { id: 606, hd: false, name: "AL JAZEERA", img: "ch_alja.png" },
    { id: 702, hd: false, name: "ARIRANG", img: "ch_arir.png" },
    { id: 704, hd: false, name: "K+", img: "ch_k+.jpg" },
    { id: 705, hd: true, name: "KBS WORLD HD", img: "ch_kbs.png" },
    { id: 821, hd: true, name: "HBO HITS HD", img: "ch_hbohits.jpg" },
    { id: 822, hd: true, name: "HBO SIGNATURE HD", img: "ch_hbosig.png" },
    { id: 823, hd: true, name: "HBO FAMILY HD", img: "ch_hbofam.jpg" },
    { id: 824, hd: true, name: "CINEMAX HD", img: "ch_cine.jpg" },
    { id: 825, hd: true, name: "WARNER TV HD", img: "ch_warner.jpg" },
    { id: 826, hd: true, name: "ONE SPORTS HD", img: "ch_1spo.png" },
    { id: 827, hd: true, name: "NBA Philippines", img: "ch_nba.jpg" },
    { id: 831, hd: true, name: "OUTDOOR CHANNEL HD", img: "ch_outdo.png" },
    { id: 841, hd: true, name: "BBC WORLD NEWS", img: "ch_bbcnews.png" },
    { id: 842, hd: true, name: "CNN HD", img: "ch_cnn.jpg" },
    { id: 843, hd: true, name: "MTV LIVE HD", img: "ch_mtv.jpg" },
    { id: 1000, hd: false, name: "PPV ", img: "favicon.ico" },
];

const cardsInq = [
    {
        ic: <AI.AiOutlineMail className="card-ic"/>,
        title: "Send us Email",
        desc: "Send us an email regards of your concern together with your Account Information and documents if available. Send it in our email located below",
        item: <span> bscni.cs@bataanspacecable.com </span>,
    },
    {
        ic: <AI.AiOutlineFacebook className="card-ic"/>,
        title: "Message us on Facebook",
        desc: "Visit our official facebook page and message your concern together with your Account Information and documents if available",
        item: <a href="https://www.facebook.com/profile.php?id=100083135060391" target="_blank" rel="noopener noreferrer">@Bataan Space Cable</a>,
    },
    {
        ic: <AI.AiOutlinePhone className="card-ic"/>,
        title: "Contact Us",
        desc: <>Call our personel to settle your issue or<br/> Send us a text message regards of your concern together with your Account Information and documents if available</>,
        item: <>
                <span>0998-550-7723 - For Technical Issue</span>
                <span>237-2611 / 237-0050 - For Billing Issue</span>
             </>,
    },
]

export {
    navLinks,
    packageNet,
    packageCatv,
    images,
    algo,
    newType,
    existType,
    plansNet,
    plansTvNet,
    faqs,
    cardsInq,
    channels,
};
