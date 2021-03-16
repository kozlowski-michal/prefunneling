import React from 'react';

import classesCSS from './LeftDialog.module.css';
import Marco from './LeftDialogElements/Marco';
import LeftDialogTitle from './LeftDialogElements/LeftDialogTitle';
import LeftDialogMessage from './LeftDialogElements/LeftDialogMessage';
import LeftDialogSquareList from './LeftDialogElements/LeftDialogSquareList';
import LeftDialogRoundList from './LeftDialogElements/LeftDialogRoundList';
import LeftDialogListTitle from './LeftDialogElements/LeftDialogListTitle';

const leftDialog = ({
    title,
    message,
    marco,
    listTitle,
    squareList,
    roundList,
}) => {
    return (
        <>
            <LeftDialogTitle
                title={title} />

            {message &&
                <LeftDialogMessage message={message} />}

            <div className={classesCSS.TitleLine} />

            {marco &&
                <Marco />}

            {listTitle &&
                <LeftDialogListTitle listTitle={listTitle} />}

            {squareList?.length > 0 &&
                <LeftDialogSquareList list={squareList} />}

            {roundList?.length > 0 &&
                <LeftDialogRoundList list={roundList} />}
        </>
    )
}

export default leftDialog;