const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
  { id: 5, name: "emma" },
];

const menu = [
  {
    id: 1,
    title: "Networking Fundamentals",
    category: "networking",
    price: 15.99,
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
    // img: "./images/item-1.jpeg",
    desc: `What is IP address
    IP address is a numerical label that is connected to the computer Network which uses internet protocol for the communication.
    Ip address serves two main function host or network Interface identification or a location addressing.
    
    What is Subnet 
    Subnet is a logical subdivision of an IP network. And the process of dividing a Network into two or more IP network is called subnetting.
    
    What is subnet Mask?
    Subnet mask is used to determine whether the network is on the local subnet or on a remote network.
    
    Number of hosts per subnet
    2^host bits (number of zeros in binary)-2
    
    What is default gateway
    It is an IP address that links the hosts subnet to the other network. It tells the network IP address whether this is a local host or a remote host.
    
    How does wave sync works
    Wave sync works on UDP hole punching.
    
    What is DHCP
    It allocates the IP address automatically to any devices
    What is DNS server
    DNS server is a server that converts the address to a public DNS IP address
    
    What are Ports 
    It is a virtual point where network starts and end. These are software based and managed by OS.
    
    
    What is Port forwarding
    This is a way of giving access from external network to a computer on the internal network.
    This is done my mapping the internal Ip address and port to the external IP address and a port.
    Router uses NAT to distribute same pu47blic IP address to all the system in the Network
    Port forwarding is done on a router.14 
    
    What is DMZ on a network
    DMZ is an organization perimeter network which is protected from a external traffic. This area can’t be accessed externally.
    
    What is unicast and multi cast
    Unicast is sending packet to one at a time while multicasting is sending a packet to all at a time.
    Multicast utilizes a bandwidth saves a bandwidth.
        
    What is RAID
    RAID is the data storage virtualization technology that uses multiple physical drives to achieve one or more logical units for the purpose of data redundancy and performance improvement. It allows storing data across multiple hard drives. The purpose of RAID is to achieve data redundancy to reduce data loss and, in a lot of cases, improve performance
    RAID 0 
    RAID 1
    RAID 5
    RAID 6
    RAID 10
    Two type of RAID 
    Software 
    hardware RAID
    
    
    
    
    
    what is bandwidth on CCTV
    The allocated size for a data transmission is bandwidth
    Typically the size is on 2 mb/s
    And the data size depends on 
    Frame rate 
    Resolution
    Low light 
    Scne complexity
    
    Camera stream
    There are two or three streams main stream. substream and third stream
    Frame rate
    The rate at which a picture frame is transmitted is a frame rate.
    What is RTSP
    RTSP is a video streaming protocol that provide the video stream to the third-party recorder or a software.
    H265 and H264
    It is a video compression codec that reduces the data size thus bandwidth reduction is occurred
    P2P
    P2p is a process of sharing a digital content by using a P2p network technology where a digital content is searched by a software from the computers connected on the network rather then from a distribution server.
    
    DDNS 
    The DDNS is a way of connecting to the Ip address where the IP address is dynamic. The DDNS is a third-party program that monitors the change in the IP address on that particular device and instead of we connecting to the device we connect to the third-party software and that software redirects us to the particular device. `,
  },
  {
    id: 2,
    title: "Algorithms and Data Structures",
    category: "Javascript",
    price: 13.99,
    img: "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 3,
    title: "Active Directory Services",
    category: `design-patterns`,
    price: 6.99,
    img: "https://images.pexels.com/photos/8989453/pexels-photo-8989453.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 4,
    title: "Continuous intergration and Deployment",
    category: "aws",
    price: 20.99,
    img: "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Best practices of Clean Code",
    category: "python",
    price: 22.99,
    img: "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Linting and Testing",
    category: "lint",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Linting and Testing",
    category: "lint",
    price: 8.99,
    img: "https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: `design-patterns`,
    price: 12.99,
    img: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: `design-patterns`,
    price: 16.99,
    img: "https://media.istockphoto.com/photos/javascript-code-computer-language-programming-internet-text-editor-picture-id1156837650?b=1&k=20&m=1156837650&s=612x612&w=0&h=OX6ZD67nV3QZYV38GIFXekPzSjZTxYvJ-iZ3yuTt178=",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

module.exports = { people, menu };
