const ssc_physics=document.getElementById('ssc_physics')
const ssc_chemistry=document.getElementById('ssc_chemistry')
const ssc_biology=document.getElementById('ssc_biology')
const ssc_higher_math=document.getElementById('ssc_higher_math')
// HSC
const hsc_physics=document.getElementById('hsc_physics')
const hsc_chemistry=document.getElementById('hsc_chemistry')
const hsc_biology=document.getElementById('hsc_biology')
const hsc_higher_math=document.getElementById('hsc_higher_math')
// ?Main upload btn
const mainUploadBtn=document.getElementById('main-upload-btn')
const uploadPercent=document.getElementById('upload-percent')

// Separate input

const sscInput=document.querySelectorAll('.ssc-input')
const hscInput=document.querySelectorAll('.hsc-input')

// Firebase 

sscInput.forEach(singleElement=>{
    singleElement.addEventListener('change',function(event) {
        let files=event.target.files
        // let reader=new FileReader()
        // reader.readAsDataURL(files[0])
        uploadToFireBase(files[0],event.target.name)
    })
})
hscInput.forEach(singleElement=>{
    singleElement.addEventListener('change',function(event) {
        let files=event.target.files
        // let reader=new FileReader()
        // reader.readAsDataURL(files[0])
        uploadToFireBase(files[0],event.target.name)
    })
})

// This function upload pdf to fire base
function uploadToFireBase(file,fileNameType) {
    console.log(fileNameType);
    let fileName=file.name
    const uploadTask=firebase.storage().ref(`files/${fileName}.pdf`).put(file)

    uploadTask.on('state_changed',(snapshot)=>{
        let progress=(snapshot.totalBytes/snapshot.totalBytes)*100 
        uploadPercent.innerText=progress+'%'
    },
    (err)=>{
        console.log(err)
    },
    ()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            saveToDataBase(url,fileNameType)
        })
        alert('file uploaded successfully')
    }
    
    )


}

// Function to save it on database
function saveToDataBase(url,fileNameType) {
    if (fileNameType.includes('ssc')) {
        if(fileNameType==='ssc_physics'){
            // db.collection('ssc').doc('ssc_physics').set({
            //     url,
            //     fileName:'ssc_physics'
            // })
            
            addToDoc('ssc','ssc_physics',url)
        }else if(fileNameType==='ssc_chemistry'){
            // db.collection('ssc').doc('ssc_chemistry').set({
            //     url,
            //     fileName:'ssc_chemistry'
            // })

            addToDoc('ssc','ssc_chemistry',url)
            
            
        }else if(fileNameType==='ssc_biology'){
            // db.collection('ssc').doc('ssc_biology').set({
            //     url,
            //     fileName:'ssc_biology'
            // })
            addToDoc('ssc','ssc_biology',url)
        }else if(fileNameType==='ssc_higher_math'){
            // db.collection('ssc').doc('ssc_higher_math').set({
                //     url,
                //     fileName:'ssc_higher_math'
                // })
            addToDoc('ssc','ssc_higher_math',url)
        }
        
    }else if(fileNameType.includes('hsc')){


        if(fileNameType==='hsc_physics'){
            // db.collection('ssc').doc('ssc_physics').set({
            //     url,
            //     fileName:'ssc_physics'
            // })
            
            addToDoc('hsc','hsc_physics',url)
        }else if(fileNameType==='hsc_chemistry'){
            // db.collection('ssc').doc('ssc_chemistry').set({
            //     url,
            //     fileName:'ssc_chemistry'
            // })

            addToDoc('hsc','hsc_chemistry',url)
            
            
        }else if(fileNameType==='hsc_biology'){
            // db.collection('ssc').doc('ssc_biology').set({
            //     url,
            //     fileName:'ssc_biology'
            // })
            addToDoc('hsc','hsc_biology',url)
        }else if(fileNameType==='hsc_higher_math'){
            // db.collection('ssc').doc('ssc_higher_math').set({
                //     url,
                //     fileName:'ssc_higher_math'
                // })
            addToDoc('hsc','hsc_higher_math',url)
        }



    }
    console.log(fileNameType);
}
function addToDoc(collection,fileNameType,url) {
    db.collection(collection).doc(fileNameType).set({
        url,
        fileName:fileNameType
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}



// Adding Download cards to the dom
addDownloadCard()

function addDownloadCard() {
    db.collection('ssc').get()
    .then(res=>{
        const docsArr=res.docs
        const container=document.querySelector('#ssc_container')
        docsArr.forEach(doc=>{
            createCard(doc.data(),container)
        })
    })
    .catch(err=>console.log(err))
    db.collection('hsc').get()
    .then(res=>{
        const docsArr=res.docs
        const container=document.querySelector('#hsc_container')
        docsArr.forEach(doc=>{
            createCard(doc.data(),container)
        })
    })
    .catch(err=>console.log(err))
    
}

function createCard(data ,container) {

    const cardDiv=document.createElement('div')
    cardDiv.className='col-md-4 g-3 p-2 '
    cardDiv.innerHTML=`
            <div class="card">
				<div class="card-body">
					<img src="./image/cheatsheet_01.jpg" alt="" class="card-img" />
					<h3 class="card-title text-center py-3">${data.fileName.split('_').join(' ').toUpperCase()} !</h3>
						<p class="card-description text-center">
						    100 % নির্ভুল উত্তর । অ্যাসাইনমেন্ট উত্তর ডাউনলোড করতে নিচের
						    বাটনে ক্লিক করো
							<span class="b-d">Please Subscribe , Like And Share My Video । আরও Assignment এর উত্তর পেতে Easy Classroom-BD এর সাথেই থাকুন । </span>
						</p>
						<a class="download-pdf-btn w-50 my-4 d-block mx-auto text-center" href="${data.url}" onclick="()=>return false;"  download>
								<i class="fas fa-download"></i> Download PDF
					    </a>
							</div>
						</div>
    
    
    
    
    `
    container.appendChild(cardDiv)
    
}