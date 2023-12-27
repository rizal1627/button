import Link from 'next/link'
import {Button, buttonVariants } from "@/components/button";

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import { FaCheck, FaRegTrashCan, FaFolder } from "react-icons/fa6";


export default function Page() {
    return (
        <>
            <div className="bg-slate-300 min-h-screen flex flex-col items-center p-4">
                <h1 className="text-2xl font-bold text-center">Hello, Welcome To Dashboard Page!</h1>
                <div className="hover:bg-indigo-500 m-4 rounded-md hover:shadow-inner hover:scale-110 p-4 transition ease-in-out delay-150 duration-300">
                    <Link href="/">Go Back</Link>
                </div>
                <div className="flex xsm:flex-col md:flex-row gap-2">
                    <Button 
                    href='/'
                    variant={'default'}
                    size={'lg'}>Default</Button>
                    <Button 
                    href='/'
                    variant={'primary'}
                    size={'lg'}
                    >Primary</Button>
                    <Button 
                    href='/'
                    variant={'success'}
                    size={'lg'}>Success</Button>
                    <Button 
                    href='/'
                    variant={'warning'}
                    size={'lg'}>Warning</Button>
                    <Button 
                    href='/'
                    variant={'danger'}
                    size={'lg'}>Danger</Button>
                    <Button 
                    href='/'
                    variant={'info'}
                    size={'lg'}
                    >Info</Button>
                </div>
                <div className="relative flex flex-col gap-2 items-center group m-4">
                    <h1>Tooltip </h1>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Tooltip title="Tooltip Top" placement="top">
                                <Button>top</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Tooltip title="Tooltip Top" placement="right">
                                <Button>Right</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Tooltip title="Tooltip Top" placement="left">
                                <Button>Left</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Tooltip title="Tooltip Top" placement="bottom">
                                <Button>Bottom</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </div>
                <div className="flex flex-row gap-2">
                    <Button 
                    variant={'success'}
                    size={'lg'}
                    ><FaCheck className="w-5"/>
                    Submit</Button>
                    <Button 
                    variant={'danger'}
                    size={'lg'}><FaRegTrashCan className="w-5"/>
                    Delete</Button>
                </div>
            </div>
            
        </>
    )
  }