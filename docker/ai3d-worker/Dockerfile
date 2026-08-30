FROM nvidia/cuda:12.4.1-cudnn-runtime-ubuntu22.04
ENV DEBIAN_FRONTEND=noninteractive PYTHONUNBUFFERED=1
RUN apt-get update && apt-get install -y python3 python3-pip git && rm -rf /var/lib/apt/lists/*
WORKDIR /opt/ai3d
COPY requirements.txt ./requirements.txt
RUN python3 -m pip install --upgrade pip && python3 -m pip install -r requirements.txt
COPY worker.py ./worker.py
EXPOSE 8787
CMD ["python3","worker.py"]
