export function changeData(arr,pid){
	const newArr = []
	arr.forEach((item)=>{
		if(item.pid == pid){
			const children = changeData(arr,item.id)
			if(children.length){
				item.children = children
			}
			newArr.push(item)
		}
	})
	return newArr
}