
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