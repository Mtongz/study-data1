/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-06-25 11:08:29
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-25 16:14:32
 */
$(function () {
    // alert(11);
    loadDoingData()
    $('#title').on("keyup", function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === '') {
                alert('请输入今天的待办事项')
            } else {
                let doingData = getData()
                doingData.push({
                    title: $(this).val(),
                    hasFinish: false
                })
                saveDoingData(doingData)
                loadDoingData()
                $(this).val('')
            }
        }
    })

    $('ol, ul').on('click', 'input', function () {
        let data = getData()
        let index = $(this).siblings('a').data().index
        data[index].hasFinish = $(this).prop('checked')
        saveDoingData(data)
        loadDoingData()
    })

    $('ol, ul').on("click", "a", function () {
        let data = getData()
        let index = $(this).data().index
        data.splice(index, 1)
        saveDoingData(data)
        loadDoingData()
    })

    function getData() {
        let data = localStorage.getItem('todoList')
        if (data !== null) {
            return data = JSON.parse(data)
        } else {
            return []
        }
    }

    function saveDoingData(data) {
        localStorage.setItem('todoList', JSON.stringify(data))
    }

    function loadDoingData() {
        let doingData = getData()
        console.log(doingData);
        let todoCount = 0;
        let finishCount = 0;
        $("ol, ul").empty();
        $.each(doingData, function (index, item) {
            if (item.hasFinish) {
                $('ul').prepend('<li><input type="checkbox" checked="checked"><p>' + item.title + '</p><a href="javaScript:;" data-index=' + index + '></a></li>')
                finishCount++
            } else {
                $('ol').prepend('<li><input type="checkbox"><p>' + item.title + '</p><a href="javaScript:;" data-index=' + index + '></a></li>')
                todoCount++
            }
        })
        $('#todocount').text(todoCount)
        $('#donecount').text(finishCount)
    }
})