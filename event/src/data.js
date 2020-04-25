import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/fest1.jpg";
import img2 from "./images/workshop1.jpg";
import img3 from "./images/medicalcamp1.png";
import img4 from "./images/conference1.jpg";
import img5 from "./images/conference2.jpg";
import img6 from "./images/conference3.jpg";
import img7 from "./images/fest2.png";
import img8 from "./images/conference4.jpg";
import img9 from "./images/workshop2.jpg";
import img10 from "./images/fest3.jpeg";
import img11 from "./images/Blooddonation1.jpg";
import img12 from "./images/medicalcamp2.jpg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Cultural Fest",
      slug: "Cultural Fest",
      type: "fest",
      price: 500,
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: true,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img1
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Workshop",
      slug: "Workshop",
      type: "workshop",
      price: 100,
      college:"Shrinivas Institute of Technology, Valachil",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img2
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "medical camp",
      slug: "medical camp",
      type: "medical camp",
      price: 0,
      college:"NITK,Surathkal",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "medical camp is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img3
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "nbjv",
      slug: "nbjv",
      type: "workshop",
      price: 200,
      college:"NITTE,Karkala",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: true,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img4
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Conference20",
      slug: "Conference20",
      type: "conference",
      price: 500,
      college:"Srinivas Institute of Technology, Mukka",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img5
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Tech-Conference",
      slug: "Tech-Conference",
      type: "conference",
      price: 500,
      college:"Aloysious College,Beeri",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img6
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "ITRIX 20",
      slug: "ITRIX 20",
      type: "fest",
      price: 200,
      college:"Saint Joseph Engieering College, Vamanjur",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img7
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "business-conf",
      slug: "business-conf",
      type: "conference",
      price: 500,
      college:"Srinivas Institute of Technology, Valachil",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: true,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img8
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "IT-workshop",
      slug: "IT-workshop",
      type: "workshop",
      price: 300,
      college:"GovindaDasa College, Surathkal",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img9
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Tech-Fest2020",
      slug: "Tech-Fest2020",
      type: "fest",
      price: 200,
      college:"Aloysious College,Beeri",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img10
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "blood donation",
      slug: "blood donation",
      type: "medical camp",
      price: 0,
      college:"Canara College,Kodialbail",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "blood donation is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img11
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "medical program",
      slug: "medical program",
      type: "medical camp",
      price: 0,
      college:"Canara College,Kodialbail",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img12
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Azeotrophy 2020",
      slug: "Azeotrophy 2020",
      type: "fest",
      price: 500,
      college:"Alwas College",
      // size: 200,
      // capacity: 1,
      // pets: false,
      // breakfast: false,
      featured: false,
      description:
        "AZeotropy is an annual Chemical Engineering Symposium organized by students of the Chemical Engineering Department, IIT Bombay. In Chemical Engineering, Azeotrope is a mixture of two or more liquids whose proportions cannot be altered by just simple distillation On similar lines, the name AZeotropy signifies the goal of achieving a terrific, indestructible relation between the chemical industry and the curriculum for chemical engineering. It aims to manifest the very spirit of Chemical Engineering in young students from all corners of India. It involves a blend of Chemical engineering-based competitions, lectures, exhibitions, workshops, and many fun-with-learning events.AZeotropy runs over a span of two days during the month of March with a footfall of over 2000 from more than 400 colleges of chemical engineering across India. It is a non-profit student-run organization that started in 2007 primarily to cater to the chemical engineering enthusiasts by providing them with a competitive as well as a learning platform.",
      // extras: [
      //   "Plush pillows and breathable bed linens",
      //   "Soft, oversized bath towels",
      //   "Full-sized, pH-balanced toiletries",
      //   "Complimentary refreshments",
      //   "Adequate safety/security",
      //   "Internet",
      //   "Comfortable beds"
      // ],
      images:[
        {
          fields: {
            file: {
              url: img1
            }
          }
        }
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room3
        //     }
        //   }
        // },
        // {
        //   fields: {
        //     file: {
        //       url: room4
        //     }
        //   }
        // }
      ]
    }
  }
];
