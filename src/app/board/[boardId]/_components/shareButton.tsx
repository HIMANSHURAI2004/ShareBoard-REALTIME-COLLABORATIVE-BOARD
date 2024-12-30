import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
    EmailIcon,
    EmailShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton,
  } from "react-share";

import React from 'react'
import { Hint } from "@/app/(dashboard)/_components/hint";
import { CopyIcon, Share2 } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonProps {
    boardId : string;
}

const ShareButton = ({
    boardId,
} : ShareButtonProps ) => {
    const shareUrl = `${window.location.origin}/board/${boardId}`;
    const onCopyLink = () => {
        navigator.clipboard.writeText(
            shareUrl
        )
        .then(() => toast.success("Link copied"))
        .catch(() => toast.error("Failed to copy link"))
    };
  return (
    <Dialog>
      <DialogTrigger asChild>
            <div className="absolute top-2 left-[400px] bg-white h-12 justify-center hidden md:flex items-center shadow-md cursor-pointer rounded-full hover:bg-blue-100">
            <Hint label='Share Board' side='bottom' sideOffset={10}>
                <Button variant="board" className="rounded-full hover:bg-blue-100 ">
                    <Share2 className="text-blue-700 h-5 w-5"/>
                </Button>
            </Hint>
            </div>
      </DialogTrigger>
      <DialogContent className="w-80">
        <DialogHeader>
          <DialogTitle >Share this board</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm">
            Share your board with others to collaborate in real time
        </DialogDescription>
        <DialogFooter>
            <div className="flex justify-center items-center space-x-4">
                <Button onClick={onCopyLink} variant='board' className="rounded-full hover:bg-blue-100 border bg-gray-50">
                    <CopyIcon className="h-6 w-6"/>
                </Button>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                <EmailShareButton url={shareUrl}>
                    <EmailIcon size={40} round={true} />
                </EmailShareButton>
                <TelegramShareButton url={shareUrl}>
                    <TelegramIcon size={40} round={true} />
                </TelegramShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
            </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
)
}

export default ShareButton