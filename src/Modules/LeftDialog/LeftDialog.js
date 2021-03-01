import React from 'react';

import classesCSS from './LeftDialog.module.css';
import Marco from './LeftDialogElements/Marco';
import LeftDialogTitle from './LeftDialogElements/LeftDialogTitle';
import LeftDialogMessage from './LeftDialogElements/LeftDialogMessage';
import LeftDialogSquareList from './LeftDialogElements/LeftDialogSquareList';
import LeftDialogRoundList from './LeftDialogElements/LeftDialogRoundList';
import LeftDialogListTitle from './LeftDialogElements/LeftDialogListTitle';

const leftDialog = (props) => {
    return (
        <React.Fragment>
            <LeftDialogTitle
                title={props.title} />

            {props.message ? <LeftDialogMessage
                message={props.message} /> : null}

            <div className={classesCSS.TitleLine} ></div>

            {props.marco ? <Marco /> : null}

            {props.listTitle ? <LeftDialogListTitle
                message={props.message} /> : null}

            {props.squareList?.length > 0 ? <LeftDialogSquareList
                list={props.squareList} /> : null}

            {props.roundList?.length > 0 ? <LeftDialogRoundList
                list={props.roundList} /> : null}

        </React.Fragment>
    )
}

export default leftDialog;