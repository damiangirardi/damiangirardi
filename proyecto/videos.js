export const initialStep = {
    image: 'intro/01_intro.jpg',
    video: 'masterplan/01_intro.mp4',
    blob: ''
}
export const guide = [
    {
        videoBefore: { 
            path: '02_sec_C_rev.mp4',
            blob: ''
        },
        image: 'posterVideos/02_home.jpg',
        videoAfter: { 
            path: '02_sec_A.mp4', 
            blob: ''
        },
        birdView: {
            videoBefore: { 
                path: '03_sec_top.mp4',
                blob: ''
            },
            image: 'posterVideos/03_sec_top.jpg',
            videoAfter: { 
                path: '03_sec_top.mp4', 
                blob: ''
            },
        }
    },
    {
        videoBefore: { 
            path: '02_sec_A_rev.mp4', 
            blob: ''
        },
        image: 'posterVideos/02_point_A.jpg',
        videoAfter: { 
            path: '02_sec_B.mp4', 
            blob: ''
        }
    },
    {
        videoBefore: { 
            path: '02_sec_B_rev.mp4', 
            blob: ''
        },
        image: 'posterVideos/02_point_B.jpg',
        videoAfter: { 
            path: '02_sec_C.mp4', 
            blob: ''
        }
    }
]