function insertContentById (id, content)
{
    const element = document.getElementById (id);
    if (element)
    {
        element.innerHTML = content;
        return true;
    }
    else
    {
        console.error (`The element #${id} does not exist!`);
        return false;
    }
}

function isMobile ()
{
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test (navigator.userAgent);
}

function loadPlayer ()
{
    if (isMobile ())
    {
        const mobileContent = `<embed frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="https://music.163.com/m/outchain/player?type=2&id=2145269432&auto=1&height=66">`;
        if (insertContentById ('musicplayer', mobileContent)) console.log ('Mobile version of the player has been successfully inserted.');
    }
    else
    {
        const desktopContent = `<embed frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="https://music.163.com/outchain/player?type=2&id=2145269432&auto=1&height=66">`;
        if (insertContentById ('musicplayer', desktopContent)) console.log ('Desktop version of the player has been successfully inserted.');
    }
}

loadPlayer ();