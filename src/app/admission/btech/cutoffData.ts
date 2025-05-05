export interface CutoffData {
  course: string;
  programCode: string;
  general: {
    op: number;
    cl: number;
  };
  genEws: {
    op: number;
    cl: number;
  };
  obcNcl: {
    op: number;
    cl: number;
  };
  sc: {
    op: number;
    cl: number;
  };
  st: {
    op: number;
    cl: number;
  };
}

export const cutoffData: CutoffData[] = [
  {
    course: 'Computer Science and Engineering',
    programCode: '4110',
    general: { op: 28598, cl: 54459 },
    genEws: { op: 45326, cl: 66605 },
    obcNcl: { op: 26713, cl: 74427 },
    sc: { op: 127084, cl: 240244 },
    st: { op: 226248, cl: 363408 }
  },
  {
    course: 'Electronics and Communication Engineering',
    programCode: '4114',
    general: { op: 30342, cl: 58374 },
    genEws: { op: 36619, cl: 71074 },
    obcNcl: { op: 53804, cl: 81439 },
    sc: { op: 179044, cl: 248878 },
    st: { op: 276834, cl: 369503 }
  },
  {
    course: 'Data Science & Artificial Intelligence',
    programCode: '4181',
    general: { op: 53436, cl: 65501 },
    genEws: { op: 43854, cl: 74518 },
    obcNcl: { op: 48429, cl: 86173 },
    sc: { op: 136921, cl: 251122 },
    st: { op: 216285, cl: 371836 }
  }
];

export const neutralCutoffs: CutoffData[] = [
  {
    course: 'CSE',
    programCode: '4110',
    general: { op: 28598, cl: 54459 },
    genEws: { op: 45326, cl: 66605 },
    obcNcl: { op: 26713, cl: 74427 },
    sc: { op: 127084, cl: 240244 },
    st: { op: 226248, cl: 363408 }
  },
  {
    course: 'DSAI',
    programCode: '4181',
    general: { op: 30342, cl: 58374 },
    genEws: { op: 36619, cl: 71074 },
    obcNcl: { op: 53804, cl: 81439 },
    sc: { op: 179044, cl: 248878 },
    st: { op: 276834, cl: 369503 }
  },
  {
    course: 'ECE',
    programCode: '4114',
    general: { op: 53436, cl: 65501 },
    genEws: { op: 43854, cl: 74518 },
    obcNcl: { op: 48429, cl: 86173 },
    sc: { op: 136921, cl: 251122 },
    st: { op: 216285, cl: 371836 }
  }
];

export const femaleCutoffs: CutoffData[] = [
  {
    course: 'CSE',
    programCode: '4110',
    general: { op: 34079, cl: 55447 },
    genEws: { op: 42750, cl: 75046 },
    obcNcl: { op: 48636, cl: 76647 },
    sc: { op: 91732, cl: 91732 },
    st: { op: 207053, cl: 215399 }
  },
  {
    course: 'DSAI',
    programCode: '4181',
    general: { op: 64962, cl: 75062 },
    genEws: { op: 47636, cl: 75046 },
    obcNcl: { op: 91789, cl: 83910 },
    sc: { op: 99429, cl: 103925 },
    st: { op: 245076, cl: 394286 }
  },
  {
    course: 'ECE',
    programCode: '4114',
    general: { op: 42760, cl: 69794 },
    genEws: { op: 38542, cl: 69794 },
    obcNcl: { op: 79010, cl: 84598 },
    sc: { op: 175884, cl: 262938 },
    st: { op: 394286, cl: 394286 }
  }
];
